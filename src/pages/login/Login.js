import css from "../login/login.css";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Login() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
    
  });

  const [period, setPeriod] = useState(1);
  const [storeInfo, setStoreInfo] = useState({
    storeUrl: "",
    salesPlatform: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "number") {
      const formattedValue = value.replace(/\D/g, "");
      if (formattedValue.length <= 11) { 
        setFormData((prevData) => ({
          ...prevData,
          [name]: formattedValue,
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleStoreInfoChange = (e) => {
    const { name, value } = e.target;
    setStoreInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (period === 1) {
      if (
        !formData.name ||
        !formData.surname ||
        !formData.email ||
        !formData.number
      ) {
        alert("Lütfen tüm alanları doldurunuz.");
        return;
      }
      setPeriod(2);
    } else if (period === 2) {
      if (!storeInfo.storeUrl || !storeInfo.salesPlatform) {
        alert("Lütfen mağaza bilgilerinizi tamamlayınız.");
        return;
      }
      console.log("Kullanıcı Bilgileri:", formData);
      console.log("E-ticaret Mağaza Bilgileri:", storeInfo);
      Swal.fire({
        icon: "success",
        title: "Başarılı!",
        text: "Başvurunuz Tamamlandı",
      });
    }
  };

  return (
    <div className="login-section">
      <div className="login-form">
        <div className="login-container">
          <div>
            <h2
              style={{
                fontSize: "30px",
                color: "#273142",
                fontWeight: "500",
                margin: "0",
                marginBottom: "20px",
                textAlign: "left",
              }}
            >
              Giriş Yap
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#273142",
                fontWeight: "normal",
                textAlign: "center",
                margin: "0",
                marginBottom: "20px",
                textAlign: "left",
              }}
            >
              WorkCompany Satıcı Paneli’ne hoşgeldiniz! Devam etmek için lütfen
              giriş yapınız.
            </p>
          </div>
          {period === 1 && (
            <form
              style={{ margin: "auto", margin: "0" }}
              onSubmit={handleSubmit}
            >
              <div>
                <div>
                  <div style={{ textAlign: "left" }}>
                    <label>
                      <p
                        style={{
                          color: "#6e7787",
                          fontSize: "14px",
                          margin: "0",
                          paddingLeft: "12px",
                          marginBottom: "8px",
                          marginTop: "10px",
                          fontWeight: "500",
                        }}
                      >
                        İsim
                      </p>
                    </label>
                  </div>
                  <input
                    style={{
                      width: "100%",
                      border: "1px solid #d5d9e1",
                      borderRadius: "5px",
                      height: "40px",
                      paddingLeft: "11px",
                    }}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="İsim"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </div>
                <div>
                  <div style={{ textAlign: "left" }}>
                    <label>
                      <p
                        style={{
                          color: "#6e7787",
                          fontSize: "14px",
                          margin: "0",
                          paddingLeft: "12px",
                          marginBottom: "8px",
                          marginTop: "10px",
                          fontWeight: "500",
                        }}
                      >
                        Soyisim
                      </p>
                    </label>
                  </div>
                  <input
                    style={{
                      width: "100%",
                      border: "1px solid #d5d9e1",
                      borderRadius: "5px",
                      height: "40px",
                      paddingLeft: "11px",
                    }}
                    type="text"
                    id="surname"
                    name="surname"
                    placeholder="Soyisim"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </div>
                <div>
                  <div style={{ textAlign: "left" }}>
                    <label>
                      <p
                        style={{
                          color: "#6e7787",
                          fontSize: "14px",
                          margin: "0",
                          paddingLeft: "12px",
                          marginBottom: "8px",
                          marginTop: "10px",
                          fontWeight: "500",
                        }}
                      >
                        Email
                      </p>
                    </label>
                  </div>
                  <input
                    style={{
                      width: "100%",
                      border: "1px solid #d5d9e1",
                      borderRadius: "5px",
                      height: "40px",
                      paddingLeft: "11px",
                    }}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </div>
                <div>
                  <div style={{ textAlign: "left" }}>
                    <p
                      style={{
                        color: "#6e7787",
                        fontSize: "14px",
                        margin: "0",
                        paddingLeft: "12px",
                        marginBottom: "8px",
                        marginTop: "10px",
                        fontWeight: "500",
                      }}
                    >
                      Telefon Numaranız
                    </p>
                  </div>
                  <input
                    style={{
                      width: "100%",
                      border: "1px solid #d5d9e1",
                      borderRadius: "5px",
                      height: "40px",
                      paddingLeft: "11px",
                    }}
                    type="number"
                    id="number"
                    name="number"
                    placeholder="Telefon Numaranız"
                    value={formData.number}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{11}"
                    className="input"
                  />
                </div>
              </div>
              <div style={{ marginTop: "20px" }}>
                <button
                  type="submit"
                  style={{
                    background: "#016271",
                    border: "none",
                    width: "100%",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    Giriş Yap
                  </p>
                </button>
              </div>
            </form>
          )}

          {period === 2 && (
            <form
              style={{ margin: "auto", margin: "0" }}
              onSubmit={handleSubmit}
            >
              <div>
                <div style={{ textAlign: "left" }}>
                  <label>
                    <p
                      style={{
                        color: "#6e7787",
                        fontSize: "14px",
                        margin: "0",
                        paddingLeft: "12px",
                        marginBottom: "8px",
                        marginTop: "10px",
                        fontWeight: "500",
                      }}
                    >
                      Url
                    </p>
                  </label>
                </div>
                <input
                  style={{
                    width: "100%",
                    border: "1px solid #d5d9e1",
                    borderRadius: "5px",
                    height: "40px",
                    paddingLeft: "11px",
                    width: "calc(100% - 22px)",
                  }}
                  type="url"
                  name="storeUrl"
                  placeholder="Mağaza URL'nizi Ekleyiniz"
                  value={storeInfo.storeUrl}
                  onChange={handleStoreInfoChange}
                  required
                  className="input"
                />
              </div>
              <div>
                <div style={{ textAlign: "left" }}>
                  <label>
                    <p
                      style={{
                        color: "#6e7787",
                        fontSize: "14px",
                        margin: "0",
                        paddingLeft: "12px",
                        marginBottom: "8px",
                        marginTop: "10px",
                        fontWeight: "500",
                      }}
                    >
                      Satış Platformu
                    </p>
                  </label>
                </div>
                <select
                  style={{
                    width: "100%",
                    border: "1px solid #d5d9e1",
                    borderRadius: "5px",
                    height: "40px",
                    paddingLeft: "11px",
                    color: "#6d6d6d",
                  }}
                  name="salesPlatform"
                  value={storeInfo.salesPlatform}
                  onChange={handleStoreInfoChange}
                  required
                >
                  <option value="">Satış Platformunuzu Seçiniz</option>
                  <option value="Trendyol">Trendyol</option>
                  <option value="Hepsiburada">Hepsiburada</option>
                  <option value="Amazon">Amazon</option>
                  <option value="Çiçek Sepeti">Çiçek Sepeti</option>
                  <option value="Pazarama">Pazarama</option>
                  <option value="Getir">Getir</option>
                  <option value="Teknoosa">Teknoosa</option>
                </select>
              </div>
              <div style={{ marginTop: "20px" }}>
                <button
                  type="submit"
                  style={{
                    background: "#016271",
                    border: "none",
                    width: "100%",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    Başvuruyu Tamamla
                  </p>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
