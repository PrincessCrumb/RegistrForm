import './App.css';
import {useState} from "react";

export default function App() {
    const inputs = [
        {
            name: "name",
            placeholder: "Имя",
            type: "text"
        },
        {
            name: "password",
            placeholder: "Пароль",
            type: "password"
        },
        {
            name: "checkPassword",
            placeholder: "Проверка пароля",
            type: "password"
        },
        {
            name: "gender",
            placeholder: "Пол",
            type: "radio",
            options: [
                {
                    name: "male",
                    value: "Мужской",
                },
                {
                    name: "female",
                    value: "Женский",
                }
            ]
        },
    ]

    const [state, setState] = useState({
        name: "",
        password: "",
        checkPassword: "",
        gender: ""
    })

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert('A Form was submitted: ' + JSON.stringify(state));
    }

    return (
        <form className="main-form" onSubmit={handleSubmit}>
            {
                inputs.map((value, index) => (
                    <div id={value.name} key={value.name + index}>
                        <label htmlFor={value.name}>{value.placeholder}: </label>
                        {value.options === undefined ?
                            <input name={value.name}
                                   key={value.name + index}
                                   id={value.name + index}
                                   placeholder={value.placeholder}
                                   type={value.type}
                                   onChange={handleChange}
                            />
                            : value.options?.map(optionValue => (
                                <div>
                                    <label htmlFor={value.name}>{optionValue.value}: </label>
                                    <input name={optionValue.name}
                                           key={optionValue.name + index}
                                           id={optionValue.name + index}
                                           value={optionValue.value}
                                           type={value.type}
                                           onChange={handleChange}
                                    />
                                </div>
                            ))
                        }
                    </div>
                ))
            }
            <div id="error" style={{color: "red"}}></div>
            <input type="submit" name="submit" value="Готово"/>
        </form>
    );
}