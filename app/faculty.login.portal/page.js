"use client";
import React, { useState } from "react";

export default function FacultyPortal() {
  const [applicationNumber, setApplicationNumber] = useState("");
  const [studentData, setStudentData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/students/${applicationNumber}`);
      if (!response.ok) {
        throw new Error("Student not found");
      }
      const data = await response.json();
      console.log(data);
      setStudentData(data);
    } catch (error) {
      console.error("Error searching for student:", error.message);
      setStudentData(null);
    }
  };

  return (
    <main className="flex flex-col justify-center items-center w-full gap-12 h-full">
      <div className="flex flex-col items-center gap-4">
        <label htmlFor="applicationNumber" className="text-lg font-semibold">
          Enter Student Application Number:
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            id="applicationNumber"
            value={applicationNumber}
            onChange={(e) => setApplicationNumber(e.target.value)}
            className="border border-gray-400 rounded-md px-3 py-2 outline-none"
            required
          />
          <button
            type="button"
            onClick={handleSearch}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700"
          >
            Search
          </button>
        </div>
      </div>

      {studentData && (
        <div className="w-1/3 mt-8">
          <h2 className="text-xl font-semibold mb-2">Student Record:</h2>
          <div className="bg-gray-100 rounded-md p-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
      <p className="text-lg font-semibold mb-2">Personal Details:</p>
                <p>
                  <strong>First Name:</strong> {studentData.student.first_name}
                </p>
                <p>
                  <strong>Middle Name:</strong>{" "}
                  {studentData.student.middle_name}
                </p>
                <p>
                  <strong>Surname:</strong> {studentData.student.surname}
                </p>
                <p>
                  <strong>Date of Birth:</strong> {studentData.student.dob}
                </p>
                <p>
                  <strong>Father's First Name:</strong> {studentData.student.father_first_name}
                </p>
                <p>
                  <strong>Father's Middle Name:</strong> {studentData.student.father_middle_name}
                </p>
                <p>
                  <strong>Father's Surname:</strong> {studentData.student.father_surname}
                </p>
                <p>
                  <strong>Mother's First Name:</strong> {studentData.student. mother_first_name}
                </p>
                <p>
                  <strong>Mother's Middle Name:</strong> {studentData.student.dmother_middle_nameob}
                </p>
                <p>
                  <strong>Mother's Surname:</strong> {studentData.student.mother_surname}
                </p>
                <p>
                  <strong>Postal Address:</strong> {studentData.student.legible_postal_address}
                </p>
                <p>
                  <strong>contact number:</strong> {studentData.student.legible_contact}
                </p>
                <p>
                  <strong>Email ID:</strong> {studentData.student.legible_email}
                </p>
                <p>
                  <strong>category:</strong> {studentData.student.category}
                </p>
                <p>
                  <strong>Region:</strong> {studentData.student.region}
                </p>
                <p>
                  <strong>Applicant Photo:</strong>{" "}
                  {studentData.student.passportPhoto}
                </p>
              </div>
              <div>

      <p className="text-lg font-semibold mb-2">Academic Details:</p>
                <p>
                  <strong>Programme Name:</strong>{" "}
                  {studentData.student.programmeName}
                </p>
                <p>
                  <strong>Stream:</strong> {studentData.student.stream}
                </p>
                <p>
                  <strong>Shift:</strong> {studentData.student.shift}
                </p>
                <p>
                  <strong>Total Marks (10th Grade):</strong>{" "}
                  {studentData.student.total_marks}
                </p>
                <p>
                  <strong>Programme Name:</strong>{" "}
                  {studentData.student.programmeName}
                </p>
                <p>
                  <strong>Stream:</strong>{" "}
                  {studentData.student.stream}
                </p>
                <p>
                  <strong>shift:</strong>{" "}
                  {studentData.student.shift}
                </p>
                <p>
                  <strong>Application no:</strong>{" "}
                  {studentData.student.appNo}
                </p>
                <p>
                  <strong>Registration Date:</strong>{" "}
                  {studentData.student.regDate}
                </p>
                <p>
                  <strong>NLT(JEE)/CET Roll No.(L.E.):</strong>{" "}
                  {studentData.student.rollNo}
                </p>
                <p>
                  <strong>NLT(JEE)/CET(LE) Rank:</strong>{" "}
                  {studentData.student.rank}
                </p>
                <p>
                  <strong>Registration form:</strong>{" "}
                  {studentData.student. registrationForm}
                </p>
                <p>
                  <strong>Admit Card:</strong>{" "}
                  {studentData.student. admitCard}
                </p>
               
        <p className="text-lg font-semibold mb-2">Details of examinations passed:</p>
          <p className="text-lg font-semibold mb-2">10th Examination Details:</p>
                <p>
                  <strong>Board:</strong>{" "}
                  {studentData.student.board}
                </p>
                <p>
                  <strong>Rollno:</strong>{" "}
                  {studentData.student.roll_no}
                </p>
                <p>
                  <strong>Year:</strong>{" "}
                  {studentData.student.year}
                </p>
                <p>
                  <strong>Subject1:</strong>{" "}
                  {studentData.student.subject_1}
                </p>
                <p>
                  <strong>Subject2:</strong>{" "}
                  {studentData.student.subject_2}
                </p>
                <p>
                  <strong>Subject3:</strong>{" "}
                  {studentData.student.subject_3}
                </p>
                <p>
                  <strong>Subject4:</strong>{" "}
                  {studentData.student.subject_4}
                </p>
                <p>
                  <strong>Subject5:</strong>{" "}
                  {studentData.student. subject_5}
                </p>
                <p>
                  <strong>Subject6:</strong>{" "}
                  {studentData.student.subject_6}
                </p>
                <p>
                  <strong>Total Marks:</strong>{" "}
                  {studentData.student.total_marks}
                </p>
                <p>
                  <strong>Percentage:</strong>{" "}
                  {studentData.student. total_percentage}
                </p>
                <p>
                  <strong>10th Marksheet:</strong>{" "}
                  {studentData.student.marksheet_10}
                </p>


                <p className="text-lg font-semibold mb-2">12th Examination Details:</p>
                <p>
                  <strong>Board:</strong>{" "}
                  {studentData.student.board_12}
                </p>
                <p>
                  <strong>Rollno:</strong>{" "}
                  {studentData.student.roll_no_12}
                </p>
                <p>
                  <strong>Year:</strong>{" "}
                  {studentData.student.year_12}
                </p>
                <p>
                  <strong>Subject1:</strong>{" "}
                  {studentData.student.subject_1_12}
                </p>
                <p>
                  <strong>Subject2:</strong>{" "}
                  {studentData.student.subject_2_12}
                </p>
                <p>
                  <strong>Subject3:</strong>{" "}
                  {studentData.student.subject_3_12}
                </p>
                <p>
                  <strong>Subject4:</strong>{" "}
                  {studentData.student.subject_4_12}
                </p>
                <p>
                  <strong>Subject5:</strong>{" "}
                  {studentData.student. subject_5_12}
                </p>
                <p>
                  <strong>Subject6:</strong>{" "}
                  {studentData.student.subject_6_12}
                </p>
                <p>
                  <strong>Total Marks:</strong>{" "}
                  {studentData.student.total_marks_12}
                </p>
                <p>
                  <strong>Percentage:</strong>{" "}
                  {studentData.student. total_percentage_12}
                </p>
                <p>
                  <strong>10th Marksheet:</strong>{" "}
                  {studentData.student.marksheet_12}
                </p>
               
        <p className="text-lg font-semibold mb-2">Details of Applicants of Btech(laterl Entry) Programme:</p>

                <p>
                  <strong>University:</strong>{" "}
                  {studentData.student.university}
                </p>
                <p>
                  <strong>Roll numbe:</strong>{" "}
                  {studentData.student.roll_no_university}
                </p>
          
                <p className="text-lg font-semibold mb-2">first year Details(Lateral Programe):</p>     
                <p>
                  <strong>Subjects taken:</strong>{" "}
                  {studentData.student.subjects_1st_year}
                </p>
                <p>
                  <strong>Total:</strong>{" "}
                  {studentData.student.t_m_1}
                </p>
                <p>
                  <strong>Marks:</strong>{" "}
                  {studentData.student.m_o_1}
                </p>
                <p>
                  <strong>Percentage:</strong>{" "}
                  {studentData.student.p_1}
                </p>

                <p className="text-lg font-semibold mb-2">Second year Details(Lateral Programe):</p>     
                <p>
                  <strong>Subjects taken:</strong>{" "}
                  {studentData.student.subjects_2nd_year}
                </p>
                <p>
                  <strong>Total:</strong>{" "}
                  {studentData.student.t_m_2}
                </p>
                <p>
                  <strong>Marks:</strong>{" "}
                  {studentData.student.m_o_2}
                </p>
                <p>
                  <strong>Percentage:</strong>{" "}
                  {studentData.student.p_2}
                </p>
              
                <p className="text-lg font-semibold mb-2">Third year Details(Lateral Programe):</p>     
                <p>
                  <strong>Subjects taken:</strong>{" "}
                  {studentData.student.subjects_3rd_year}
                </p>
                <p>
                  <strong>Total:</strong>{" "}
                  {studentData.student.t_m_3}
                </p>
                <p>
                  <strong>Marks:</strong>{" "}
                  {studentData.student.m_o_3}
                </p>
                <p>
                  <strong>Percentage:</strong>{" "}
                  {studentData.student.p_3}
                </p>
              
                <p>
                  <strong>Diploma Certificate:</strong>{" "}
                  {studentData.student.diploma_certificate}
                </p>

                <p className="text-lg font-semibold mb-2">Payments</p>      
                <p>
                  <strong>Payment Receipt:</strong>{" "}
                  {studentData.student.paymentReceipt}
                </p>

                <p className="text-lg font-semibold mb-2">Declaration</p>      
                <p>
                  <strong>Candidate's Signature:</strong>{" "}
                  {studentData.student.candidateSignature}
                </p>
                <p>
                  <strong>Parent's Signature:</strong>{" "}
                  {studentData.student.parentSignature}
                </p>

              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
