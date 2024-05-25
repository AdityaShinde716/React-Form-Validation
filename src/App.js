import React, { useState } from 'react';
import './styles.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    phoneCode: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.phoneCode) newErrors.phoneCode = 'Country Code is required';
    if (!formData.phoneNo) newErrors.phoneNo = ' and also Phone Number is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.panNo) newErrors.panNo = 'Pan Number is required';
    if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar Number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const togglePasswordVisibility = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  if (submitted) {
    return (
      <div>
        <h1>Form Submitted Successfully</h1>
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Username:</strong> {formData.username}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone Number:</strong> {formData.phoneCode} {formData.phoneNo}</p>
        <p><strong>Country:</strong> {formData.country}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>PAN Number:</strong> {formData.panNo}</p>
        <p><strong>Aadhar Number:</strong> {formData.aadharNo}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <h1>Form with Validation</h1>
        <label>First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>
      <div>
        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password</label>
        <input type={formData.showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} />
        <button type="button" onClick={togglePasswordVisibility}>
          {formData.showPassword ? "Hide" : "Show"}
        </button>
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label>Phone Number</label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <select name="phoneCode" value={formData.phoneCode} onChange={handleChange} style={{ marginRight: '10px' }}>
            <option value="">Select Code</option>
            <option value="+91">India (+91)</option>
            <option value="+1">USA (+1)</option>
            <option value="+61">Australia(+61)</option>
            <option value="+44">England (+44)</option>
            <option value="+27">South Africa (+27)</option>
            <option value="+33">France (+33)</option>
            <option value="+49">Germany (+49)</option>
            <option value="+81">Japan (+81)</option>
            <option value="+54">Argentina (+54)</option>
            <option value="+64">New Zealand (+64)</option>
          </select>
          <input type="tel" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
        </div>
        {errors.phoneCode && <span>{errors.phoneCode}</span>}
        {errors.phoneNo && <span>{errors.phoneNo}</span>}
      </div>
      <div>
        <label>Country</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Australia">Australia</option>
          <option value="England">England</option>
          <option value="South Africa">South Africa</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
          <option value="Japan">Japan</option>
          <option value="Argentina">Argentina</option>
          <option value="New Zealand">New Zealand</option>
        </select>
        {errors.country && <span>{errors.country}</span>}
      </div>
      <div>
        <label>City</label>
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="New York">New York</option>
          <option value="Texas">Texas</option>
          <option value="Sydney">Sydney</option>
          <option value="Melbourne">Melbourne</option>
          <option value="London">London</option>
          <option value="Manchester">Manchester</option>
          <option value="Johansburg">Johansburg</option>
          <option value="Pretoria">Pretoria</option>
          <option value="Paris">Paris</option>
          <option value="Lyon">Lyon</option>
          <option value="Leverkusen">Leverkusen</option>
          <option value="Munich">Munich</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Kasukabe">Kasukabe</option>
          <option value="Rosario">Rosario</option>
          <option value="La Plata">La Plata</option>
          <option value="Christchurch">Christchurch</option>
          <option value="Auckland">Auckland</option>
        </select>
        {errors.city && <span>{errors.city}</span>}
      </div>
      <div>
        <label>PAN Number</label>
        <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
        {errors.panNo && <span>{errors.panNo}</span>}
      </div>
      <div>
        <label>Aadhar Number</label>
        <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
        {errors.aadharNo && <span>{errors.aadharNo}</span>}
      </div>
      <button type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>
    </form>
  );
}

export default App;





