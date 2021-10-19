import {useStoreon} from '../web_modules/storeon/preact.js'
import CarouselItem from './CarouselItem.js'
import EyeExaminationProcessList from './EyeExaminationProcessList.js'
import CalendarList from './CalendarList.js'
import TimeSlotSelection from './TimeSlotSelection.js'
import CustomerForm from './CustomerForm.js'
import Summary from './Summary.js'
import {html} from '../helper/index.js'

export default (props) => {
  return html`
    <div class="carousel slide">
      <div class="carousel-inner">
        <${CarouselItem} step="process" wrappedComponent=${EyeExaminationProcessList}/>
        <${CarouselItem} step="calendar" wrappedComponent=${CalendarList}/>
        <${CarouselItem} step="appointment" wrappedComponent=${TimeSlotSelection}/>
        <${CarouselItem} step="customer" wrappedComponent=${CustomerForm}/>
        <${CarouselItem} step="summary" wrappedComponent=${Summary}/>
      </div>
    </div>
  `;
}
