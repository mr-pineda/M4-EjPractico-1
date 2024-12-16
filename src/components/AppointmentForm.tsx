import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { doctorInfo } from '../types/data';
import { CheckIcon } from '@heroicons/react/20/solid';

const AppointmentForm = ({
  doctorsData,
  hours,
  days,
}: {
  doctorsData: doctorInfo[];
  hours: string[];
  days: string[];
}) => {
  const [selected, setSelected] = useState<doctorInfo | null>(doctorsData[0]);
  const [hour, setHour] = useState<string | null>(hours[0]);
  const [day, setDay] = useState<string | null>(days[0]);
  const [doctorQuery, setDoctorQuery] = useState('');
  const [dayQuery, setDayQuery] = useState('');
  const [hourQuery, setHourQuery] = useState('');

  const filteredDoctor =
    doctorQuery === ''
      ? doctorsData
      : doctorsData.filter((doctor) => {
          return doctor.name.toLowerCase().includes(doctorQuery.toLowerCase());
        });

  const filteredDay =
    dayQuery === ''
      ? days
      : days.filter((day) => {
          return day.toLowerCase().includes(dayQuery.toLowerCase());
        });

  const filteredHour =
    hourQuery === ''
      ? hours
      : hours.filter((hour) => {
          return hour.toLowerCase().includes(hourQuery.toLowerCase());
        });

  return (
    <div className=' bg-white w-full px-28 py-16'>
      <div className='mb-5'>
        <h1>Doctor</h1>
        <Combobox
          value={selected}
          onChange={(value) => setSelected(value)}
          onClose={() => setDoctorQuery('')}
        >
          <div className='relative'>
            <ComboboxInput
              className='w-full rounded-lg border-black border-2 bg-white/50 py-1.5 pr-8 pl-3 text-sm/6 text-black focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              displayValue={(doctor: doctorInfo) => doctor?.name}
              onChange={(event) => setDoctorQuery(event.target.value)}
            />
            <ComboboxButton className='group absolute inset-y-0 right-0 px-2.5'>
              <ChevronDownIcon className='size-4 fill-black' />
            </ComboboxButton>
          </div>

          <ComboboxOptions
            anchor='bottom'
            transition
            className='w-[var(--input-width)] rounded-xl border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
          >
            {filteredDoctor.map((doctor, idx) => (
              <ComboboxOption
                key={idx}
                value={doctor}
                className='group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10'
              >
                <CheckIcon className='invisible size-4 fill-white group-data-[selected]:visible' />
                <div className='text-sm/6 text-black'>
                  {doctor.name} --- {doctor.specialty}
                </div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Combobox>
      </div>
      <div className='flex flex-row mb-5'>
        <div className='mr-2'>
          <h1>Hora</h1>
          <Combobox
            value={hour}
            onChange={(value) => setHour(value)}
            onClose={() => setHourQuery('')}
          >
            <div className='relative'>
              <ComboboxInput
                className='w-full rounded-lg border-black border-2 bg-white/50 py-1.5 pr-8 pl-3 text-sm/6 text-black focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                displayValue={(currentHour: string) => currentHour}
                onChange={(event) => setHourQuery(event.target.value)}
              />
              <ComboboxButton className='group absolute inset-y-0 right-0 px-2.5'>
                <ChevronDownIcon className='size-4 fill-black' />
              </ComboboxButton>
            </div>

            <ComboboxOptions
              anchor='bottom'
              transition
              className='w-[var(--input-width)] rounded-xl border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
            >
              {filteredHour.map((hour, idx) => (
                <ComboboxOption
                  key={idx}
                  value={hour}
                  className='group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10'
                >
                  <CheckIcon className='invisible size-4 fill-white group-data-[selected]:visible' />
                  <div className='text-sm/6 text-black'>{hour}</div>
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Combobox>
        </div>
        <div>
          <h1>Día</h1>
          <Combobox
            value={day}
            onChange={(value) => setDay(value)}
            onClose={() => setDayQuery('')}
          >
            <div className='relative'>
              <ComboboxInput
                className='w-full rounded-lg border-black border-2 bg-white/50 py-1.5 pr-8 pl-3 text-sm/6 text-black focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                displayValue={(currentDay: string) => currentDay}
                onChange={(event) => setDayQuery(event.target.value)}
              />
              <ComboboxButton className='group absolute inset-y-0 right-0 px-2.5'>
                <ChevronDownIcon className='size-4 fill-black' />
              </ComboboxButton>
            </div>

            <ComboboxOptions
              anchor='bottom'
              transition
              className='w-[var(--input-width)] rounded-xl border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
            >
              {filteredDay.map((day, idx) => (
                <ComboboxOption
                  key={idx}
                  value={day}
                  className='group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10'
                >
                  <CheckIcon className='invisible size-4 fill-black' />
                  <div className='text-sm/6 text-black'>{day}</div>
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Combobox>
        </div>
      </div>
      <button
        className=' bg-sky-700 p-3 rounded-lg text-white font-bold'
        onClick={() =>
          console.log(
            `Reserva de Hora con Doctor: ${selected?.name}
Día: ${day}
Hora: ${hour}`
          )
        }
      >
        Agendar Hora
      </button>
    </div>
  );
};

export default AppointmentForm;
