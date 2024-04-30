"use client";

import { useEffect, useState } from "react";
import { storage } from "@/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { Attack } from "@/type"; 
import { groups } from "@/type";

export default function DataPage() {
  const [audioGroups, setAudioGroups] = useState<groups>([]);
  const [datasetUrl, setDatasetUrl] = useState("");

  useEffect(() => {
    const audioAttacks: Attack = [
      { title: "Reverberation", path: "Reverberation" },
      { title: "Noise Addition", path: "noise_addition" },
      { title: "Recompression", path: "recompression" },
      { title: "Resampling", path: "resampling" },
    ];
    fetchDatasetUrl();
    if (audioGroups.length === 0) {
      loadAudioGroups(audioAttacks);
    }
  }, []);

  async function fetchDatasetUrl() {
    try {
      const datasetRef = ref(
        storage,
        "/Dataset/Asvspoof19 Laundered Dataset.zip"
      );
      const url = await getDownloadURL(datasetRef);
      setDatasetUrl(url);
    } catch (error) {
      console.error("Failed to load dataset URL:", error);
    }
  }

  async function loadAudioGroups(attacks: Attack) {
    try {
      const groups = await Promise.all(
        attacks.map(async (attack) => {
          const groupRef1 = ref(storage, attack.path);
          const res1 = await listAll(groupRef1);
          const audios = await Promise.all(
            res1.prefixes.map(async (reference) => {
              const groupRef2 = ref(storage, reference.fullPath);
              const res2 = await listAll(groupRef2);
              const name = res2.items[1].fullPath.split("/")[1];

              const audios2 = await Promise.all(
                res2.items.map(async (item) => {
                  const urls = await getDownloadURL(
                    ref(storage, item.fullPath)
                  );
                  return { name: name, urls: urls };
                })
              );
              return { name: name, url: audios2 };
            })
          );
          return { title: attack.title, audios };
        })
      );
      setAudioGroups(groups);
    } catch (error) {
      console.error("Failed to load audio groups:", error);
    }
  }

  return (
    <div className="mx-auto w-full px-2.5 md:px-20 mt-20 mb-96">
      <h1 className="text-center max-h-80 h-80 text-2xl md:text-4xl content-center">
        Asvspoof19 Laundered Dataset
      </h1>
      <p className="text-center">
        Download the dataset{" "}
        <a
          href={datasetUrl}
          className="text-blue-900 cursor-pointer underline"
          download={""}
        >
          here
        </a>
      </p>
      <h3 className="text-center text-2xl m-5">Samples from the dataset</h3>
      {audioGroups.map((group, index) => (
        <div key={index}>
          <h2 className="text-center text-2xl mt-5 underline decoration-2 font-bold">
            {group.title}
          </h2>
          <div className="flex flex-col">
            {group.audios.map((audio, idx) => (
              <div className="md:flex-col justify-center m-5 " key={idx}>
                <div className="text-center m-3 font-medium md:text-lg text-sm text-wrap truncate">{audio.name}</div>
                <div className="flex md:flex-row flex-col justify-center place-items-center">
                  {audio.url.map((link, id) => (
                    <audio controls key={id}>
                      <source src={link.urls} type="audio/mpeg"/>
                      Your browser does not support the audio element.
                    </audio>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
