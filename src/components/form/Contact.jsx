import React, { useState, useEffect } from "react";
import axios from "axios";
import ModalPop from "../ModalPop";
import Select from "react-select";

const Contact = () => {
  // const [vehicle, setVehicle] = useState({});
  const data = {
    company: [
      {
        id: 1,
        name: "Audi",
        vehicle: [{ id: 1, title: "Car" }],
      },
      {
        id: 2,
        name: "BMW",
        vehicle: [{ id: 1, title: "Car" }],
      },
      {
        id: 3,
        name: "Ford",
        vehicle: [{ id: 1, title: "Car" }],
      },
      {
        id: 4,
        name: "Mercedes-Benz",
        vehicle: [{ id: 1, title: "Car" }],
      },
      {
        id: 5,
        name: "Volvo",
        vehicle: [{ id: 1, title: "Car" }],
      },

      {
        id: 6,
        name: "Hero",
        vehicle: [{ id: 2, title: "Bike" }],
      },
      {
        id: 7,
        name: "Honda",
        vehicle: [{ id: 2, title: "Bike" }],
      },
      {
        id: 8,
        name: "KTM",
        vehicle: [{ id: 2, title: "Bike" }],
      },
      {
        id: 9,
        name: "TVS",
        vehicle: [{ id: 2, title: "Bike" }],
      },
      {
        id: 10,
        name: "Ashok Leyland",
        vehicle: [{ id: 3, title: "Trucks" }],
      },
      {
        id: 11,
        name: "Bharat Benz",
        vehicle: [{ id: 3, title: "Trucks" }],
      },
      {
        id: 12,
        name: "Eicher",
        vehicle: [{ id: 3, title: "Trucks" }],
      },
      {
        id: 13,
        name: "Mahindra",
        vehicle: [{ id: 3, title: "Trucks" }],
      },
      {
        id: 14,

        name: "Tata Motors",
        vehicle: [{ id: 3, title: "Trucks" }],
      },
      {
        id: 15,
        name: "Volvo",
        vehicle: [{ id: 3, title: "Trucks" }],
      },
    ],
    vehicle: [
      { id: 1, title: "Car" },
      { id: 2, title: "Bike" },
      { id: 3, title: "Trucks" },
    ],
  };
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);

  // useEffect(() => {
  //   loadVehicle();
  // }, []);

  // const loadVehicle = async () => {
  //   const veh = await axios.get(`http://localhost:3001/vehicle`);
  //   setVehicle(veh.data);
  //   console.log(veh.data);
  // };

  const vehicleOption = (item) => ({ value: item.id, label: item.title });
  const vehicleOptions = () => {
    if (selectedCompany) {
      return data.company
        .filter((company) => company.id === selectedCompany.value)[0]
        .vehicle.map(vehicleOption);
    } else {
      return data.vehicle.map(vehicleOption);
    }
  };

  const companyOption = (item) => ({
    value: item.id,
    label: item.name,
  });
  const companyOptions = () => {
    if (selectedVehicle) {
      return data.company
        .filter(
          (company) =>
            company.vehicle.filter(
              (vehicle) => vehicle.id === selectedVehicle.value
            ).length
        )
        .map(companyOption);
    } else {
      return data.company.map(companyOption);
    }
  };

  const reset = () => {
    setSelectedCompany(null);
    setSelectedVehicle(null);
    console.log("resert submited");
  };
  const submit = () => {
    console.log("buy submited");
  };

  return (
    <>
      <div className="container shadow p-2">
        <div className="mb-3">
          <label className="font-weight-bold">vehicle type</label>
          <Select
            id="vehicle"
            value={selectedVehicle}
            onChange={setSelectedVehicle}
            options={vehicleOptions()}
            selectedCompany={selectedCompany}
            placeholder="select vehicle type"
          />
        </div>
        <div className="mb-3">
          <label className="font-weight-bold">vehicle company</label>
          <Select
            id="company"
            value={selectedCompany}
            options={companyOptions()}
            onChange={setSelectedCompany}
            selectedVehicle={selectedVehicle}
            placeholder="select vehicle company"
          />
        </div>
        <button className="btn btn-primary btn-block" onClick={submit}>
          Buy
        </button>
        <button className="btn btn-warning btn-block" onClick={reset}>
          Reset
        </button>

        <div className="m-3">
          <p
            selectedCompany={selectedCompany}
            selectedVehicle={selectedVehicle}
          >
            Selected Vehicle: {JSON.stringify(selectedVehicle || {}, null, 2)}
          </p>
          <p
            selectedCompany={selectedCompany}
            selectedVehicle={selectedVehicle}
          >
            Selected Company: {JSON.stringify(selectedCompany || {}, null, 2)}
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
