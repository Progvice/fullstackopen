const PersonForm = (props) => {

    const {addName, newName, setNewName, newPhonenumber, setNewPhonenumber} = props;

    return (
        <form onSubmit={addName}>
        <div>
          <label htmlFor="fullname">Name</label><br/>
          <input id="fullname" value={newName} onChange={(e) => {setNewName(e.target.value)}}/><br/>
          <label htmlFor="phonenumber">Phonenumber</label><br/>
          <input id="phonenumber" value={newPhonenumber} onChange={(e) => setNewPhonenumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    )

}

export default PersonForm;