import React, { useState, useEffect } from "react";
import {
  FaPaperPlane,
  FaCheck,
  FaHourglassHalf,
  FaTimes,
} from "react-icons/fa";

const Cards = () => {
  return (
    <div>
      <div className="card-box flex justify-between mb-8">
        <div className="card-element p-5 bg-primary text-white w-card border-rounded">
          <div className="card-number">
            <p className="text-5xl">4</p>
          </div>
          <div className="form-el">
            <div className="card-number text-white">
              <p className="text-4xl font-bold">{requestNum.length}</p>
            </div>
            <div className="card-text text-white">
              <p className="text-lg">
                <span className="font-semibold">All</span> Requests
              </p>
            </div>
          </div>
        </div>
        <div className="card-element p-5 bg-primary text-white w-card border-rounded">
          <div className="card-number">
            <p className="text-5xl">4</p>
          </div>
          <div className="card-text">
            <p className="text-lg">
              <span className="font-semibold">Approved</span> Request
            </p>
          </div>
        </div>
        <div className="card-element p-5 bg-primary text-white w-card border-rounded">
          <div className="card-number">
            <p className="text-5xl">4</p>
          </div>
          <div className="form-el">
            <div className="card-number text-white">
              <p className="text-4xl font-bold">{pending.length}</p>
            </div>
            <div className="card-text text-white">
              <p className="text-lg">
                <span className="font-semibold">Pending</span> Request
              </p>
            </div>
          </div>
        </div>
        <div className="card-element flex p-5 py-6 bg-primary w-card border border-rounded mr-9">
          <div className="form-el mr-6">
            <div className="icon-circle bg-red-600 p-5 rounded-full">
              <FaTimes className="text-2xl text-white" />
            </div>
          </div>
          <div className="form-el">
            <div className="card-number text-white">
              <p className="text-4xl font-bold">{rejected.length}</p>
            </div>
            <div className="card-text text-white">
              <p className="text-lg">
                <span className="font-semibold">Rejected</span> Request
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
