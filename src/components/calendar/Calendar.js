import React, { useState, useEffect } from 'react';
import moment from 'moment';
import classNames from 'classnames/bind';

import scheduleHelper from '../../helpers/schedule.helper'

import Modal from '../modal/Modal';
import { dayDictionary } from '../../constants';
import styles from './calendar.module.css';

const cx = classNames.bind(styles);

const weekdays = new Array(5).fill('');
const dayHours = new Array(9).fill('');

const getSchedule = (successF) => {
    scheduleHelper
        .getSchedule()
        .then(successF)
        .catch(e => console.error(e));
};

const Calendars = () => {
    const [isModalVisible, setModalVisibility] = useState(false);
    const [weekIndex, setWeekIndex] = useState(0);
    const [selectedDate, setCrtDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [events, setEvents] = useState([]);
    const [phone, setPhone] = useState('');

    useEffect(() => {
        getSchedule(setEvents);
    }, []);

    const isDateToday = (index) => {
        const now = moment();
        const crtDate = moment().weekday(weekIndex + index + 1).format();
        return moment(crtDate).isSame(now, 'day');
    };

    const openModal = () => {
        if (isModalVisible) return;
        setModalVisibility(true);
    };

    const closeModal = () => setModalVisibility(false);

    const isSegmentBooked = (crtDate) => {

        for (let i = 0; i < events.length; i++) {
            const {date, isConfirmed} = events[i];
            const eventDate = moment(date);
            const isBooked = eventDate.isSame(crtDate);

            if (isBooked) return {isBooked, isPending: !isConfirmed};
        }

        return false;
    };

    const addEvent = (e) => {
        e.preventDefault();

        const {
            name: {value: name},
            description: {value: description},
            phone: {value: phone},
            email: {value: email},
        } = e.target;
        const date = selectedDate.set({hour: selectedTime, minute: 0, second: 0, millisecond: 0}).format();

        const event = {
            date,
            description,
            customer: {
                name,
                email,
                phone,
            }
        };
        scheduleHelper.addEvent(event).then(() => {
            getSchedule(setEvents);
            closeModal();
        }).catch(console.error);
    };

    const formatPhone = (e) => {
        const value = e.target.value;
        const phoneWithoutSpaces = value.replace(/ /g,'');

        if (value.length > 12) return;

        const lastChar = phoneWithoutSpaces[phoneWithoutSpaces.length - 1];
        if (!/[0-9]/.test(lastChar)) return;

        let formattedPhone = `${phoneWithoutSpaces.slice(0, 4)} ${phoneWithoutSpaces.slice(4, 7)} ${phoneWithoutSpaces.slice(7, 10)}`.trim();
        setPhone(formattedPhone);
    };

    return (
        <React.Fragment>
            <div className={styles.container}>
                {isModalVisible &&
                <Modal onClose={closeModal}>
                    <form className={styles.calendar__modal} onSubmit={addEvent}>
                    <span
                        className={styles['calendar__modal--time']}>{selectedDate.format('DD MMM')} {selectedTime}:00</span>
                        <label htmlFor="schedule-name">Nume</label>
                        <input name="name" id="schedule-name" required/>
                        <label htmlFor="schedule-description">Descriere</label>
                        <textarea name="description" id="schedule-description" cols="30" rows="10"/>
                        <label htmlFor="schedule-email">Email</label>
                        <input name="email" id="schedule-email" required/>
                        <label htmlFor="schedule-phone">Telefon</label>
                        <input name="phone" id="schedule-phone" value={phone} onChange={formatPhone} required/>
                        <div>
                            <button className="secondary__button" onClick={closeModal}>Anuleaza</button>
                            <button className="main__button">Confirma Programare</button>
                        </div>
                    </form>
                </Modal>
                }
                <div>
                    <div className={styles.side__header__cell}>
                        <i className="fas fa-caret-left" onClick={() => setWeekIndex(weekIndex - 7)}/>
                        <i className="fas fa-caret-right" onClick={() => setWeekIndex(weekIndex + 7)}/>
                    </div>
                    <div className={styles.side__cell}>9:00</div>
                    <div className={styles.side__cell}>10:00</div>
                    <div className={styles.side__cell}>11:00</div>
                    <div className={styles.side__cell}>12:00</div>
                    <div className={styles.side__cell}>13:00</div>
                    <div className={styles.side__cell}>14:00</div>
                    <div className={styles.side__cell}>15:00</div>
                    <div className={styles.side__cell}>16:00</div>
                    <div className={styles.side__cell}>17:00</div>
                </div>
                {
                    weekdays.map((_, i) => {
                            const day = moment().weekday(weekIndex + i + 1);
                            const isToday = isDateToday(i);
                            console.log(day.format('ddd'));
                            return (
                                <div key={i} className={styles.column}>
                                    <div className={cx('header__cell')}>
                                        <span className={cx({selected: isToday})}>{dayDictionary[day.format('ddd')]}</span>
                                        <span className={cx({selected: isToday})}>{day.format('DD')}</span>
                                    </div>
                                    {
                                        dayHours.map((_, hourIndex) => {
                                            day.set({hour: hourIndex + 9, minute: 0, second: 0, millisecond: 0});
                                            const {isBooked, isPending} = isSegmentBooked(day);
                                            return (
                                                <div key={`${i}-${hourIndex}`} className={cx('cell')}
                                                     onClick={() => {
                                                         if (isBooked) return;
                                                         setCrtDate(day);
                                                         setSelectedTime(hourIndex + 9);
                                                         openModal()
                                                     }}>
                                                    {isBooked && <div className={cx('booked', {pending: isPending})}/>}
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            );
                        }
                    )
                }
            </div>
        </React.Fragment>
    );
};

export default Calendars;
