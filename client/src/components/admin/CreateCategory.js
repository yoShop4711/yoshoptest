import axios from "axios";
import { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import "./createcategory.css";

function CreateCategory() {
  const state = useContext(GlobalState);
  const [categories] = state.CategoriesApi.categories;
  const [name, setName] = useState("");
  const token = state.token[0];
  const [callback, setCallback] = state.CategoriesApi.callback;
  const [onEdit, setOnEdit] = useState(false);
  const[isAdmin] = state.userApi.isAdmin

  const [id, setID] = useState("");

// sconsole.log(state);

  const createCategory = async (event) => {
    event.preventDefault();
    

if(isAdmin) {
    if (onEdit) {
      const res = await axios.put(
        `/api/update_category/${id}`,
        { name},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(res.data.msg);
    } else {
      const res = await axios.post(
        "/api/create_category", {name},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.msg);
    }

    setOnEdit(false);
    setName("");
    setCallback(!callback);
}
  }

  

  const editCategory = async (id, name) => {
    setID(id);
    setName(name);
    setOnEdit(true);
  };

  const deleteCategory = async (id) => {
    const res = await axios.delete(
      `/api/delete_category/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert(res.data.msg);
    setCallback(!callback);
  };



  return (
    
       <div className="categories">
        <form onSubmit={createCategory}>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <button type="submit">{onEdit? "Update" : "Create"}</button>
        </form>

       <div className="col">
          { 
                    categories.map(category => (
                        <div className="row" key={category._id}>
                            <p>{category.name}</p>
                            <div>
                                <button onClick={() => editCategory(category._id, category.name)}>Edit</button>
                                <button onClick={() => deleteCategory(category._id)}>Delete</button>
                            </div>
                        </div>
                    ))
                }
        </div> 
      </div>


  
  );
}

export default CreateCategory;
