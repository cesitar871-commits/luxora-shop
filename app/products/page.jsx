import { perfumes } from "@/data/perfumes";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-white text-center">
        Catálogo de Perfumes Premium
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {perfumes.map((perfume, index) => (
          <div
            key={index}
            className="bg-neutral-900 p-4 rounded-xl shadow-lg border border-neutral-800 hover:border-neutral-600 transition"
          >
            <div className="w-full h-64 bg-black rounded-lg flex items-center justify-center overflow-hidden">
              {perfume.image ? (
                <Image
                  src={perfume.image}
                  width={400}
                  height={400}
                  alt={perfume.name}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-neutral-500">Imagen no disponible</span>
              )}
            </div>

            <h2 className="text-xl font-semibold mt-4 text-white">
              {perfume.name}
            </h2>

            <div className="mt-3">
              {perfume.sizes.map((size, sIndex) => (
                <p key={sIndex} className="text-neutral-400 text-sm">
                  {size.ml}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
