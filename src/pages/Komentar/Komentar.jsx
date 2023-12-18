import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Swal from "sweetalert2";

function Komentar() {
  const { key } = useParams();
  const [komentar, setKomentar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputKomentar, setInputKomentar] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputName, setInputName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localStorage.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan !",
        text: "Anda Harus Login Terlebih Dahulu",
        confirm: {
          text: "OK",
          value: true,
        },
      }).then((value) => {
        if (value) {
          navigate("/login");
        }
      });
    } else {
      if (editingId) {
        const editedKomentar = {
          komentar_id: editingId,
          name: inputName,
          email: inputEmail,
          komentar: inputKomentar,
        };
        handleEditKomentar(editedKomentar);
        setEditingId(null);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Edit sukses",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        const newData = {
          name: inputName,
          email: inputEmail,
          komentar: inputKomentar,
        };
        handleAddKomentar(newData);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Menambahkan komentar",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }

    setInputName("");
    setInputEmail("");
    setInputKomentar("");
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setInputName("");
    setInputEmail("");
    setInputKomentar("");
    setShowModal(false);
  };

  const handleEdit = (id) => {
    const selectedKomentar = komentar.find((item) => item.komentar_id === id);
    setInputName(selectedKomentar.name);
    setInputEmail(selectedKomentar.email);
    setInputKomentar(selectedKomentar.komentar);
    setEditingId(id);
    setShowModal(true);
  };

  const handleEditKomentar = (editedKomentar) => {
    const updatedKomentar = komentar.map((item) =>
      item.komentar_id === editedKomentar.komentar_id ? editedKomentar : item
    );
    setKomentar(updatedKomentar);
  };

  const handleAddKomentar = (newData) => {
    setKomentar([...komentar, { ...newData, komentar_id: Date.now() }]);
  };

  const deleteHandler = (komentar_id) => {
    Swal.fire({
      title: "Apakah anda yakin ingin menghapus komentar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedKomentar = komentar.filter(
          (item) => item.komentar_id !== komentar_id
        );
        setKomentar(updatedKomentar);
        Swal.fire({
          position: "top",
          icon: "success",
          title: 'Berhasil!, "Berhasil Hapus Data Komentar',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  useEffect(() => {
    // Simulating an asynchronous fetch
    const fetchData = async () => {
      // Replace the following line with your actual API call or data fetching logic
      // const response = await api.fetchKomentar(key);
      // const data = response.data;
      const data = []; // Sample data, replace it with your actual data

      setKomentar(data);
      setIsLoading(false);
    };

    fetchData();
  }, [key]);

  const handleInputKomentar = () => {
    setInputEmail(localStorage.getItem("email"));
    setInputName(localStorage.getItem("username"));
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(dateString).toLocaleString("en-US", options);
  };

  return <>{/* Your JSX code remains the same */}</>;
}

export default Komentar;
