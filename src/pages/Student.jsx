import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../index.css";
import { BiSkipPreviousCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { RiExpandUpDownLine } from "react-icons/ri";
import { fetchUsers, deleteUser, editUser } from "../slices/userSlice";
import { GiCancel } from "react-icons/gi";
import { HiOutlineSave } from "react-icons/hi";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const Student = () => {
  const users = useSelector((state) => state.users.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editData, setEditData] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const addStudent = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="st-nav">
        <span className="nav-next">
          <BiSkipPreviousCircle className="next" />
        </span>
        <div className="input-wrapper">
          <input className="st-sr" type="text" placeholder="Search student" />
          <IoSearchOutline className="search-icon" />
        </div>
        <span>
          <IoMdNotificationsOutline className="alarm" />
        </span>
      </div>

      <div className="navigate-home">
        <h2 className="st-title">Students List</h2>
        <div className="collect">
          <RiExpandUpDownLine className="slider" />
          <button className="add-st" onClick={addStudent}>
            ADD NEW STUDENT
          </button>
        </div>
      </div>

      <div className="student-card">
        <table className="student-table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Enroll</th>
              <th className="date">Birthday</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u, i) => (
              <tr key={i}>
                <td>
                  <img src={u.image} width="80" height="60" />
                </td>

                {editData?.id === u.id ? (
                  <>
                    <td>
                      <input
                        defaultValue={u.name}
                        onChange={(e) =>
                          setEditData({ ...editData, name: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <input
                        defaultValue={u.email}
                        onChange={(e) =>
                          setEditData({ ...editData, email: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <input
                        defaultValue={u.phone}
                        onChange={(e) =>
                          setEditData({ ...editData, phone: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <input
                        defaultValue={u.enroll}
                        onChange={(e) =>
                          setEditData({ ...editData, enroll: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        defaultValue={u.birthday}
                        onChange={(e) =>
                          setEditData({ ...editData, birthday: e.target.value })
                        }
                      />
                    </td>

                    <td className="actions">

                      <button className="save-btn"
                        onClick={() =>
                          dispatch(editUser({ id: u.id, data: editData }))
                        }
                      >
                        <HiOutlineSave className="save-icon" />
                      </button>

                      <button className="cancel-btn" onClick={() => setEditData(null)}>
                        <GiCancel className="cancel-icon" />
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.phone}</td>
                    <td>{u.enroll}</td>
                    <td>{u.birthday}</td>

                    <td className="action-div">
                      <button className="edit-btn" onClick={() => setEditData(u)}>
                        <FiEdit2 className="edit-icon"/>
                      </button>
                      <button className="delete-btn" onClick={() => dispatch(deleteUser(u.id))}>
                        <AiOutlineDelete className="delete-icon" />
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;
