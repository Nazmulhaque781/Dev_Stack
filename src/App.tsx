import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";

import type { Technology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        return response.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
      })
      .catch(() => {
        toast.error("Could not load technology data.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Add technology
  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  // Remove one
  const handleRemove = (id: string) => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (removedTechnology) {
      toast.info(
        `${removedTechnology.name} removed from your stack.`
      );
    }
  };

  // Remove all
  const handleRemoveAll = () => {
    if (stack.length === 0) return;

    setStack([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TechnologySection
          technologies={technologies}
          stack={stack}
          loading={loading}
          onAdd={handleAdd}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </main>

      <Footer />

      {/* React Toastify */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;