import { Student } from "./data";

const Box = ({ data, boxHandler }) => {
  return (
    <ul>
      {data.map((item, idx) => {
        return (
          <li key={Math.random() * 100}>
            <input
              type="checkbox"
              data-id={item.regID}
              data-name={item.name}
              data-marks={item.marks}
              checked={item.selected}
              onChange={(e) => {
                let student = {
                  name: e.target.dataset.name,
                  marks: e.target.dataset.marks,
                  regID: e.target.dataset.id,
                  selected: e.target.checked,
                };

                boxHandler(student);
              }}
            />
            <p>{item.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Box;
