import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../dummy-data";
import EventList from "../../../components/events/event-list";
import { Fragment } from "react";
import ResultsTitle from "../../../components/events/results-title";
import Button from "../../../components/ui/button";
import ErrorAlert from "../../../components/ui/error-alert";


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
        return<Fragment>
            <ErrorAlert>
            <h1>No result based on the filters</h1>

            </ErrorAlert>
    
            <div className="center">
                <Button link='/events'>Show All Events</Button>
            </div>
        </Fragment>
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    });
    if (filteredEvents.length === 0){
        return <Fragment>
            <ErrorAlert>
            <h1>No Events Found</h1>
            </ErrorAlert>
    
            <div className="center">
                <Button link='/events'>Show All Events</Button>
            </div>
        </Fragment>
    }

    const date = new Date(numYear, numMonth-1);

    return <Fragment>

                <ResultsTitle date={date}/>

             <EventList items={filteredEvents}  />
         </Fragment>
}

export default FilteredEventsPage;