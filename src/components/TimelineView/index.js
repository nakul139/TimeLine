// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = timeLineCardDetails => {
    if (timeLineCardDetails.categoryId === 'COURSE') {
      return (
        <CourseTimelineCard
          key={timeLineCardDetails.id}
          courseTimelineDetails={timeLineCardDetails}
        />
      )
    }
    return (
      <ProjectTimelineCard
        key={timeLineCardDetails.id}
        projectTimelineDetails={timeLineCardDetails}
      />
    )
  }

  return (
    <div className="timeline-view-container">
      <div className="responsive-container">
        <div className="timeline-header-container">
          <h1 className="timeline-heading">
            MY JOURNEY OF <br />
            <span className="ccbp-heading"> CCBP 4.0 </span>
          </h1>
        </div>
        <Chrono
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
          theme={{
            secondary: 'white',
            titleColor: '#0967d2',
          }}
        >
          {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
