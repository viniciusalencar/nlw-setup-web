import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import { ProgressBar } from './ProgressBar';

interface HabitDayProps {
  completed: number;
  amount: number;
}

export function HabitDay(props: HabitDayProps) {
  const completedPercentege = Math.round((props.completed / props.amount) * 100);

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx('w-10 h-10 rounded-lg', {
          'bg-zinc-900 border-zinc-800' : completedPercentege === 0,
          'bg-violet-900 border-violet-700' : completedPercentege > 0 && completedPercentege < 20,
          'bg-violet-800 border-violet-600' : completedPercentege >= 20 && completedPercentege < 40,
          'bg-violet-700 border-violet-500' : completedPercentege >= 40 && completedPercentege < 60,
          'bg-violet-600 border-violet-500' : completedPercentege >= 60 && completedPercentege < 80,
          'bg-violet-500 border-violet-400' : completedPercentege >= 80,
        })}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] w-full p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className='font-semibold text-zinc-400'>Segunda-feira</span>
          <span className='mt-1 font-extrabold leading-tight text-3xl'>17/01</span>

          <ProgressBar progress={75} />

          <Popover.Arrow height={8} width={16} className='fill-zinc-900'/>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>

  )
};