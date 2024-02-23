import { useEffect, useRef } from "react";
import { DateRangePicker } from "rsuite";
import {
  addDays,
  addYears,
  endOfDay,
  endOfMonth,
  startOfDay,
  startOfMonth,
  subDays,
} from "rsuite/esm/utils/dateUtils";
import "rsuite/styles/index.less";
import "rsuite/dist/rsuite.min.css";
import "./style.css";


function DatePicker({
  setSelectedDate = [startOfDay(new Date()), endOfDay(new Date())],
  selectedDate,
  bgColor
}) {
  const ref = useRef();
  const Ranges = [
    {
      label: "Today",
      value: [startOfDay(new Date()), endOfDay(new Date())],
      placement: "left",
    },
    {
      label: "Yesterday",
      value: [
        startOfDay(addDays(new Date(), -1)),
        endOfDay(addDays(new Date(), -1)),
      ],
      placement: "left",
    },
    {
      label: "This Week",
      value: [startOfDay(subDays(new Date(), 6)), endOfDay(new Date())],
      placement: "left",
    },
    {
      label: "Last Week",
      value: [
        startOfDay(subDays(new Date(), 12)),
        endOfDay(subDays(new Date(), 6)),
      ],
      placement: "left",
    },
    {
      label: "This Month",
      value: [
        startOfDay(startOfMonth(new Date())),
        endOfDay(endOfMonth(new Date())),
      ],
      placement: "left",
    },
    {
      label: "Last Month",
      value: [
        startOfDay(
          startOfMonth(new Date().setMonth(new Date().getMonth() - 1))
        ),
        endOfDay(endOfMonth(new Date().setMonth(new Date().getMonth() - 1))),
      ],
      placement: "left",
    },
    {
      label: "This Year",
      value: [
        startOfDay(startOfMonth(new Date().setMonth(0))),
        endOfDay(startOfDay(endOfMonth(new Date().setMonth(11)))),
      ],
      placement: "left",
    },
    {
      label: "Last Year",
      value: [
        startOfDay(addYears(startOfMonth(new Date().setMonth(0)), -1)),
        endOfDay(addYears(endOfMonth(new Date().setMonth(11)), -1)),
      ],
      placement: "left",
    },
  ];

  
 useEffect(()=>{
    document.documentElement.style.setProperty("--rs-bg-active", bgColor);
    document.documentElement.style.setProperty(
      "--rs-calendar-cell-selected-hover-bg",
      bgColor
    );
    document.documentElement.style.setProperty(
      "--rs-listbox-option-hover-bg",
      "rgb(from var(--rs-bg-active) r g b/50%)"
    );
  
    document.documentElement.style.setProperty(
      "--rs-calendar-range-bg",
      "rgb(from var(--rs-bg-active) r g b/50%)"
    );
  
//    document.getElementsByClassName('rs-picker-toolbar')[0].innerHTML = '<button>hello</button>';
 },[bgColor])

  console.log("REF", ref);
  return (
    <div>
      <DateRangePicker
        color="red"
        value={selectedDate}
        appearance="subtle"
        ranges={Ranges}
        ref={ref}
        showHeader={false}
        style={{ backgroundColor: "red !important" }}
        onChange={(e) => setSelectedDate(e)}
      />
    </div>
  );
}

export default DatePicker;
