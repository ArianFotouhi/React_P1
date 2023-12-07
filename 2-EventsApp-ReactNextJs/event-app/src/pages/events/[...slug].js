import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../dummy-data";
import EventList from "../../../components/events/event-list";



function FilteredEventsPage(){
    const router = useRouter();
    const filterData = router.query.slug;
    if(!filterData){
        return <p className='center'>Loading...</p>
    }

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    //convert str to numeric type
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if(isNaN(filteredYear) || isNaN(filteredMonth) || numYear > 2030 || numYear <2020 || numMonth>12 || numMonth<1){
        return <h1>No result based on the filters</h1>
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    });
    if (filteredEvents.length === 0){
        return <h1>No Events Found</h1>
    }
    return <div>
        <EventList items={filteredEvents}  />
    </div>
}

export default FilteredEventsPage;