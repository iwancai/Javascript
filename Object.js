data = {
  ticketing_time_limit_offset: 220,
  ticketing_time_limit_notice_period: 240,
  cancellation_deadline_offset: 200,
  cancellation_deadline_notice_period: 200,
  operation_time: [
    {
      0: {
        day: [
          { label: "Mon", value: false },
          { label: "Tue", value: false },
          { label: "Wed", value: false },
          { label: "Thu", value: false },
          { label: "Fri", value: true },
          { label: "Sat", value: true },
          { label: "Sun", value: true },
        ],
        time: [{ timeStart: "17:00" }, { timeEnd: "07:00" }],
      },
      1: {
        day: [
          { label: "Mon", value: false },
          { label: "Tue", value: false },
          { label: "Wed", value: true },
          { label: "Thu", value: true },
          { label: "Fri", value: false },
          { label: "Sat", value: false },
          { label: "Sun", value: false },
        ],
        time: [{ timeStart: "17:00" }, { timeEnd: "07:00" }],
      },
      2: {
        day: [
          { label: "Mon", value: true },
          { label: "Tue", value: true },
          { label: "Wed", value: false },
          { label: "Thu", value: false },
          { label: "Fri", value: false },
          { label: "Sat", value: false },
          { label: "Sun", value: false },
        ],
        time: [{ timeStart: "17:00" }, { timeEnd: "07:00" }],
      },
    },
  ],
};

// obj = {
//   0: {
//     day: [
//       {
//         label: "Mon",
//         value: true,
//       },
//       {
//         label: "Tue",
//         value: true,
//       },
//       {
//         label: "Wed",
//         value: false,
//       },
//       {
//         label: "Thu",
//         value: false,
//       },
//       {
//         label: "Fri",
//         value: false,
//       },
//       {
//         label: "Sat",
//         value: false,
//       },
//       {
//         label: "Sun",
//         value: false,
//       },
//     ],
//     time: [
//       {
//         timeStart: "17:00",
//       },
//       {
//         timeEnd: "07:00",
//       },
//     ],
//   },
//   1: {
//     day: [
//       {
//         label: "Mon",
//         value: false,
//       },
//       {
//         label: "Tue",
//         value: false,
//       },
//       {
//         label: "Wed",
//         value: true,
//       },
//       {
//         label: "Thu",
//         value: true,
//       },
//       {
//         label: "Fri",
//         value: false,
//       },
//       {
//         label: "Sat",
//         value: false,
//       },
//       {
//         label: "Sun",
//         value: false,
//       },
//     ],
//     time: [
//       {
//         timeStart: "17:00",
//       },
//       {
//         timeEnd: "07:00",
//       },
//     ],
//   },
//   2: {
//     day: [
//       {
//         label: "Mon",
//         value: false,
//       },
//       {
//         label: "Tue",
//         value: false,
//       },
//       {
//         label: "Wed",
//         value: false,
//       },
//       {
//         label: "Thu",
//         value: false,
//       },
//       {
//         label: "Fri",
//         value: true,
//       },
//       {
//         label: "Sat",
//         value: true,
//       },
//       {
//         label: "Sun",
//         value: true,
//       },
//     ],
//     time: [
//       {
//         timeStart: "17:00",
//       },
//       {
//         timeEnd: "07:00",
//       },
//     ],
//   },
// };

// var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
// let result = Object.keys(obj).map((key) => [Number(key), obj[key]]);
// console.log(typeof(obj[0].day));

// let newObj = Object.fromEntries(Object.entries(data_2).map(([k, v]) => [k, v * v]));

// console.log(newObj)

const map = new Map(Object.entries(data));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}
