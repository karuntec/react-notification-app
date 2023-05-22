import './index.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

const AlertNotifications = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="info icon" />
      <div className="message-container">
        <h1 className="success-heading">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="info icon" />
      <div className="message-container">
        <h1 className="error-heading">Error</h1>
        <p className="description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <div className="message-container">
        <MdWarning className="info icon" />
        <h1 className="warning-heading">Warning</h1>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderInfoNotification = () => (
    <Notification>
      <div className="message-container">
        <MdInfo className="info icon" />
        <div>
          <h1 className="info-heading">Info</h1>
          <p className="description">
            Anyone on the internet can view these files
          </p>
        </div>
      </div>
    </Notification>
  )

  return (
    <div className="app-container">
      <div className="responsive-container">
        <h1 className="main-heading">Alert Notifications</h1>
        {renderSuccessNotification()}
        {renderErrorNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  )
}

export default AlertNotifications
