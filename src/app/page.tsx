"use client";

import { Sidebar } from "@/components/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Weight,
  Ruler,
  Droplet,
  CircleUserRound,
  AlertCircle,
  Brain,
  ShipWheelIcon as Wheelchair,
} from "lucide-react";

export default function InfoPersonal() {
  const alergias = [{ id: 1, title: "Lácteos" }];
  const enfermedades = [
    { id: 1, title: "Asma" },
    { id: 2, title: "Bronquitis" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100 ">
      <Sidebar />
      <div className="container mx-auto px-6 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center">
            <CircleUserRound className="w-12 h-12 mr-4 text-blue-600" />
            {/* {data.sex === "M" ? "Bienvenido" : "Bienvenida"}, {data.firstName}{" "}
            {data.lastName} */}
            Bienvenido James
          </h1>
          <p className="text-xl text-gray-600">Información del Paciente</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-[300px]">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Características</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-3 gap-6 p-6 h-[200px]">
                {/* <CharacteristicItem
                  icon={<Weight className="text-blue-500" />}
                  label="Peso"
                  value={`${data.weight} Kg`}
                /> */}
                <CharacteristicItem
                  icon={<Weight className="text-blue-500" />}
                  label="Peso"
                  value={`71 Kg`}
                />
                <CharacteristicItem
                  icon={<Ruler className="text-green-500" />}
                  label="Altura"
                  value={`1.73 m`}
                />
                <CharacteristicItem
                  icon={<Droplet className="text-red-500" />}
                  label="Tipo de sangre"
                  value="B+"
                />
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <InfoCard
                title="Alergias"
                icon={<AlertCircle className="text-yellow-500" />}
                // items={data.allergies || []}
                items={alergias}
                emptyMessage="No tiene alergias"
                bgColor="from-yellow-400 to-yellow-500"
              />
              <InfoCard
                title="Enfermedades"
                icon={<Brain className="text-purple-500" />}
                items={enfermedades}
                emptyMessage="No tiene enfermedades"
                bgColor="from-purple-400 to-purple-500"
              />
              <InfoCard
                title="Discapacidades"
                icon={<Wheelchair className="text-green-500" />}
                items={[]}
                emptyMessage="No tiene discapacidades"
                bgColor="from-green-400 to-green-500"
              />
            </div>
          </div>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-black text-white rounded-t-lg">
              <CardTitle className="text-2xl">Datos Personales</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="flex flex-col items-center">
                <CircleUserRound className="w-32 h-32 text-primary mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {/* {data.firstName} {data.lastName} */}
                  James Sunderland
                </h2>
                <p className="text-gray-600 mb-4">
                  {/* {new Date().getFullYear() -
                    new Date(data.birthdate).getFullYear()}{" "}
                  años • {data.sex === "M" ? "Masculino" : "Femenino"} */}
                  29 años • Masculino
                </p>
              </div>
              <div className="space-y-3">
                <PersonalInfoItem
                  label="Teléfono"
                  // value={data.phoneNumber || "---"}
                  value={"809-123-4567"}
                />
                <PersonalInfoItem
                  label="Emergencia"
                  // value={data.emergencyContactPhone}
                  value={"849-666-2222"}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function CharacteristicItem({ icon, label, value }) {
  return (
    <div className="flex items-center space-x-3 bg-gray-100 p-4 rounded-lg">
      {icon}
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
}

function InfoCard({ title, icon, items, emptyMessage, bgColor }) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader
        className={`bg-gradient-to-r ${bgColor} text-white rounded-t-lg`}
      >
        <CardTitle className="text-xl flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {!items || items.length === 0 ? (
          <p className="text-gray-500 text-center py-4">{emptyMessage}</p>
        ) : (
          <ul className="space-y-2">
            {items.map((item) => (
              <li
                key={item.id}
                className="bg-gray-50 p-2 rounded-md text-gray-700"
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

function PersonalInfoItem({ label, value }) {
  return (
    <div className="flex justify-between items-center border-b border-gray-200 py-2">
      <span className="text-gray-600">{label}</span>
      <span className="font-semibold text-gray-800">{value}</span>
    </div>
  );
}
