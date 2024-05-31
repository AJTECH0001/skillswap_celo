import Image from 'next/image'
import NotificationIcon from "../../assets/alert/notification.svg"
import ProfileImg from "../../assets/alert/profileimg.svg"

const Alert = () => {
  return (
    <div className='pt-4'>
      <div className='flex justify-end space-x-5'>
        <Image src={NotificationIcon} alt="notify_" />
        <div>
          <Image src={ProfileImg} alt="img_" className='w-[32px] h-[32px] rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default Alert