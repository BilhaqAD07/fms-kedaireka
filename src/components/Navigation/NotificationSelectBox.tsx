import React, { useState } from 'react';
import Link from "next/link";
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import ReportIcon from '@mui/icons-material/Report';
import { Badge,Typography } from '@mui/material';

const actions = [
  { id: 1, title: "Humidity Sensor", description: 'Humidity Sensor melihat adanya kesalahan', timestamp: '2 jam yang lalu', route: "/", read: false },
  { id: 2, title: "Temperature Sensor", description: 'Temperature Sensor mencetak angka tinggi', timestamp: '1 hari yang lalu', route: "/", read: true },
  { id: 3, title: "Buzzer Sensor", description: 'Buzzer telah menyala', timestamp: '1 menit yang lalu', route: "/", read: true },
  { id: 4, title: "Flame Sensor", description: 'Flame Sensor melihat adanya kesalahan', timestamp: '1 hari yang lalu', route: "/", read: false }
]

const NotificationSelectBox = () => {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(actions);

  // Hitung jumlah notifikasi yang belum terbaca (read: false)
  const unreadNotifications = notifications.filter(notification => !notification.read);

  const handleNotificationClick = (id: number) => {
    // Temukan notifikasi dengan ID yang sesuai
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === id) {
        // Ubah nilai 'read' menjadi 'true' jika belum terbaca
        if (!notification.read) {
          return { ...notification, read: true };
        }
      }
      return notification;
    });

    // Perbarui state notifikasi
    setNotifications(updatedNotifications);
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center relative z-30'>
        <div onClick={() => setOpen((prev) => !prev)} className="flex flex-row justify-between items-center rounded-lg">
          <Badge badgeContent={unreadNotifications.length} color='info'> {/* Tampilkan jumlah notifikasi yang belum terbaca */}
            <NotificationsActiveOutlinedIcon className='rounded-full text-white md:text-4xl text-xl' />
          </Badge>
        </div>
        <div className={`notification-box flex flex-col bg-white dark:bg-primary_dark text-black dark:text-white overflow-y-auto my-1 rounded-lg drop-shadow-xl dark:border-white border ${open ? "md:w-72 md:h-80 w-56 h-80" : "h-0 w-0 border-none"
          } transition-all duration-200 overflow-hidden absolute top-12 md:right-0`}>
          {notifications.map(({ id, title, description, timestamp, route, read }) => (
            <div
              key={id}
              onClick={() => {
                handleNotificationClick(id); // Panggil fungsi saat notifikasi diklik
                setOpen(false);
              }}
              className={`notification-list flex justify-start p-2 border-b hover:bg-opacity-30 hover:bg-black`}
            >
              <Link href={route} className={`w-full flex flex-col p-2 rounded ${read ? 'dark:bg-primary_dark bg-white' : 'bg-sky-100 dark:bg-slate-600'}`}>
                <Typography className="title text-left font-bold text-lg">
                  {title}
                </Typography>
                <Typography className="description text-justify mt-2">
                  {description}
                </Typography>
                <Typography className="timestamp text-sm flex gap-1 justify-end mt-2">
                  {read === false ? (
                    <ReportIcon className='text-red-400' />
                  ) : (
                    <DoneAllOutlinedIcon className='text-sky-500' />
                  )}
                  {timestamp}
                </Typography>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={`fixed cursor-default inset-0 opacity-50 z-0 ${open ?
        "block" : " hidden"}`} onClick={() => setOpen(false)}>
      </div>
    </>
  )
}

export default NotificationSelectBox;
