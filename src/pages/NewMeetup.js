import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){

    function addMeetupHandler(meetupData){
        /// /meetups.json creates a table named meetups (it's a firebase feature)
        fetch(
            'https://react-meetups-bc0bf-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                header: {
                    'Content-Type':'application/json'
                }
            }
         );

    }

    return <section>
    <h1>Add New Meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetupPage;