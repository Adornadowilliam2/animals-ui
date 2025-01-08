import React from 'react';

export default function Register() {
  return (
    <section style={{ display: 'grid', height: '100vh' }}>
      <div
        style={{
          backgroundColor: 'blue',
          backgroundBlendMode: 'multiply',
          display: 'flex',
          justifyContent: 'center',
        }}
        className="img"
      >
        <img
          src="https://github.com/Adornadowilliam2/mfi-media/blob/master/whaleimg.png?raw=true"
          alt=""
          style={{ width: '100%', objectFit: 'contain' }}
        />
      </div>

      <div className="form">
        <form action="" style={{ width: '600px', height: '100vh', padding: '10px' }}>
          <h1>Register</h1>
          <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
            <label>
              Name of the Animal
              <input
                type="text"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginBottom: '10px',
                }}
                placeholder="Enter animal name.."
              />
            </label>
          </div>
          <div style={{ marginTop: '10px' }}>
            <label
              htmlFor="animalType"
              style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}
            >
              Animal Type
            </label>
            <select
              name="type_of_animal"
              id="animalType"
              style={{ width: '100%', height: '5vh' }}
            >
              <option value="" selected>
                Select an Animal Type
              </option>
              <option value="mammals">Mammals</option>
              <option value="birds">Birds</option>
              <option value="reptiles">Reptiles</option>
              <option value="amphibians">Amphibians</option>
              <option value="fish">Fish</option>
              <option value="insects">Insects</option>
            </select>
          </div>
          <button
            style={{
              marginTop: '10px',
              padding: '10px',
              width: '100%',
              backgroundColor: '#007bff',
              border: '1px solid black',
              borderRadius: '10px',
              color: 'white',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
