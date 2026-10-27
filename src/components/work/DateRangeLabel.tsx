import { DateLabel } from '@argousiere/vespertina-design-system/react';

export interface DateRangeLabelProps {
  startDate?: string;
  endDate?: string;
  isOngoing?: boolean;
  dateFormat?: string;
  className?: string;
}

const DateRangeLabel: React.FC<DateRangeLabelProps> = ({
  startDate,
  endDate,
  isOngoing,
  dateFormat = 'MMM yyyy',
  className,
}) => (
  <span className={['app-date-range-label', className].filter(Boolean).join(' ')}>
    {startDate && <DateLabel dateTime={startDate} dateFormat={dateFormat} />}

    {startDate && endDate && <span className="app-date-range-label__separator">–</span>}
    
    {isOngoing && (
      <span className="ves-date-label">Present</span>
    )}

    {
      !isOngoing && endDate && (
        <DateLabel dateTime={endDate} dateFormat={dateFormat} />
      )
    }
  </span>
);

export default DateRangeLabel;
