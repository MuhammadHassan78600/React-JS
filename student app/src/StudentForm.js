import React, { useState } from 'react';

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: '',
    id: '',
    age: '',
    email: '',
    department: '',
    phoneNumber: '',
    profilePicture: null,
  });

  const [preview, setPreview] = useState(null);
  const [students, setStudents] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'profilePicture') {
      setStudent({ ...student, profilePicture: e.target.files[0] });
      setPreview(URL.createObjectURL(e.target.files[0]));
    } else {
      setStudent({ ...student, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      const updatedStudents = [...students];
      updatedStudents[updateIndex] = student;
      setStudents(updatedStudents);
      setIsUpdate(false);
      setUpdateIndex(null);
      setStudent({
        name: '',
        id: '',
        age: '',
        email: '',
        department: '',
        phoneNumber: '',
        profilePicture: null,
      });
      setPreview(null);
    } else {
      setStudents([...students, student]);
      setStudent({
        name: '',
        id: '',
        age: '',
        email: '',
        department: '',
        phoneNumber: '',
        profilePicture: null,
      });
      setPreview(null);
    }
  };

  const handleDelete = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  const handleUpdate = (index) => {
    const studentToUpdate = students[index];
    setStudent(studentToUpdate);
    setIsUpdate(true);
    setUpdateIndex(index);
    setPreview(URL.createObjectURL(studentToUpdate.profilePicture));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>ID:</label>
          <input
            type="text"
            name="id"
            value={student.id}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={student.age}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={student.department}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={student.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Profile Picture:</label>
          <input
            type="file"
            name="profilePicture"
            onChange={handleInputChange}
          />
          {preview && (
            <img src={preview} alt="Profile Picture" width="100" height="100" />
          )}
        </div>
        <button type="submit">
          {isUpdate ? 'Update' : 'Submit'}
        </button>
      </form>
      
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <img
              src={URL.createObjectURL(student.profilePicture)}
              alt="Profile Picture"
              width="50"
              height="50"
            />
            <span>
              {student.name} ({student.id})
            </span>
            <button onClick={() => handleUpdate(index)}>Update</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentForm;