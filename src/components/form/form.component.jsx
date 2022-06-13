import "./form.styles.css";

const Form = () => {
  return (
    <div className="sme-input-form d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right">Pan Card</span>
        <input type="file" className="file-upload form-input" />
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right">Copy of Aadhaar Card</span>
        <input type="file" className="form-input file-upload" />
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right"></span>
        <textarea
          className="form-input"
          name=""
          id=""
          cols="30"
          rows="3"
        ></textarea>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right">
          Copy of Password Last 10 years
        </span>
        <input type="file" className="form-input file-upload" />
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right"></span>
        <input type="file" className="form-input file-upload" />
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right">
          Financial year wise stay in India during last 10 years
        </span>
        <select className="form-input py-2" >
            <option value="Financial Year" default>Financial Year</option>
            <option value="2000">2021</option>
            <option value="2000">2022</option>
        </select>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right">
          Note: Kindly include date of arrival and date of departure
        </span>
        <select className="form-input py-2" >
            <option value="" default>No of Days Stayed</option>
            <option value="">1</option>
            <option value="">2</option>
        </select>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right">
          both for counting the total number of days stayed in India
        </span>
        <select className="form-input py-2" >
            <option value="" default>Type of Visa</option>
            <option value="">x</option>
            <option value="">y</option>
        </select>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right">Source of Income</span>
        <select className="form-input py-2" >
            <option value="" default>Salaries</option>
            <option value="">x</option>
            <option value="">y</option>
        </select>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right"></span>
        <select className="form-input py-2" >
            <option value="" default>Salary Slips</option>
            <option value="">x</option>
            <option value="">y</option>
        </select>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right"></span>
        <select className="form-input py-2" >
            <option value="" default>Form 16</option>
            <option value="">x</option>
            <option value="">y</option>
        </select>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right"></span>
        <select className="form-input py-2" >
            <option value="" default>Nature of Deduction</option>
            <option value="">x</option>
            <option value="">y</option>
        </select>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right">
          Detail of deductions, if any under section 80C, 80D, 80E, 80G etc.
        </span>
        <select className="form-input py-2" >
            <option value="" default>Type of Document</option>
            <option value="2000">pdf</option>
            <option value="2000">xlsx</option>
        </select>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right"></span>
        <input type="file" className="form-input file-upload" />
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right"></span>
        <select className="form-input py-2" >
            <option value="" default>Type of Document</option>
            <option value="2000">pdf</option>
            <option value="2000">xlsx</option>
        </select>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right"></span>
        <input type="file" className="form-input file-upload" />
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right">
          Copy of TDS/TCS Certificates i.e, Form 16/16A, if any
        </span>
        <select className="form-input py-2" >
            <option value="" default>Type of Document</option>
            <option value="2000">pdf</option>
            <option value="2000">xlsx</option>
        </select>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right"></span>
        <input type="file" className="form-input file-upload" />
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right">
          Copy of Challan for advance tax & self-assessment tax
        </span>
        <select className="form-input py-2" >
            <option value="" default>Type of Document</option>
            <option value="2000">pdf</option>
            <option value="2000">xlsx</option>
        </select>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right"></span>
        <input type="file" className="form-input file-upload" />
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right">Name of the Bank</span>
        <input className="form-input" />
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right">Bank Account</span>
        <input className="form-input" />
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right">IFSC Code</span>
        <input className="form-input" />
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="form-label text-right">Cancelled Cheque</span>
        <input type="file" className="file-upload form-input" />
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2 mb-4">
        <span className="form-label text-right"></span>
        <button className="form-input text-light" style={{backgroundColor:"#000080", padding:5}}>Approve</button>
      </div>
    </div>
  );
};

export default Form;
