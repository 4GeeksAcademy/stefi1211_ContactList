const getState = ({ getStore, getActions, setStore }) => {
	const url = "https://playground.4geeks.com/apis/fake/contact/";
	return {
	  store: {
		
		contact: {},
		contacts: [],
	  },
	  actions: {
		// Use getActions to call a function within a fuction
		
  
		CreateContactBook: async (full_name, email, address, phone) => {
		  try {
			const response = await fetch(url, {
			  method: "POST",
			  body: JSON.stringify({
				full_name: full_name,
				email: email,
				agenda_slug: "stefi1211",
				address: address,
				phone: phone,
			  }),
			  headers: {
				"content-type": "Application/json",
			  },
			});
  
			if (response.ok) {
			  const actions = getActions();
			  actions.ContactsList();
			  return await response.json();
			} else {
			  return console.log("Contact already exists");
			}
		  } catch (error) {
			return console.log("Post error: ", error);
		  }
		},
  
		ContactsList: async () => {
		  const store = getStore();
  
		  try {
			const response = await fetch(url + "agenda/stefi1211", {
			  method: "GET",
			  headers: {
				"content-type": "Application/json",
			  },
			});
  
			if (response.ok) {
			  const body = await response.json();
			  setStore({ contacts: body });
			  return;
			}
		  } catch (error) {
			console.log(error);
		  }
		},
  
		DeleteContact: async (contact_id) => {
		  try {
			const response = await fetch(url + `${contact_id}`, {
			  method: "DELETE",
			  headers: {
				"content-type": "Application/json",
			  },
			});
  
			if (response.ok) {
			  const actions = getActions();
			  actions.ContactsList();
			  console.log("Deleted");
			}
		  } catch (error) {
			console.log(error);
		  }
		},

		GetContact: async (contact_id) => {
			console.log("Contact id: ", contact_id);
			try {
			  const response = await fetch(url + `${contact_id}`, {
				method: "GET",
				headers: {
				  "content-type": "Application/json",
				},
			  });
			  if (response.ok) {
				console.log("Correct GET");
				const actions = getActions();
				const body = await response.json();
			  	setStore({ contact: body });
			  	return body; 
			  }
			} catch (error) {
			  console.log(error);
			}
		  },
  
		UpdateContact: async (contact_id, full_name, email, address, phone) => {
		  console.log("Contact id: ", contact_id);
		  try {
			const response = await fetch(url + `${contact_id}`, {
			  method: "PUT",
			  body: JSON.stringify({
				full_name: full_name,
				email: email,
				agenda_slug: "stefi1211",
				address: address,
				phone: phone,
			  }),
			  headers: {
				"content-type": "Application/json",
			  },
			});
  
			if (response.ok) {
			  console.log("Correctly updated");
			  const actions = getActions();
			  actions.ContactsList();
			}
		  } catch (error) {
			console.log(error);
		  }
		},
	  },
	};
  };
  
  export default getState;
