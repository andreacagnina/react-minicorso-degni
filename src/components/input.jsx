import { useState } from "react";

function Input() {
    const [userData, setUserData] = useState('');
    function changeUserData(e) { setUserData(e.target.value); }

    const [voices, setVoices] = useState(['html', 'css', 'js', 'vue', 'react']);

    const [voiceSelected, setVoiceSelected] = useState(voices[0]);
    function changeVoiceSelected(e) { setVoiceSelected(e.target.value); }

    const [checked, setChecked] = useState(false);

    function changeChecked(e) { setChecked(prev => !prev); }

    return (
        <>
            <div className="input"><h2>Input</h2>
                <input type="text" value={userData} onChange={changeUserData} />
                <div>{userData}</div>
                <div><select onChange={changeVoiceSelected}> {voices.map((voice, i) => (<option key={voice + '_' + i} value={voice}>{voice}</option>))}</select></div>
                <div>{voiceSelected}</div>
            </div>

            <div><label htmlFor="color"><div>Select a color</div><input type="checkbox" name="color" id="color" value={checked} onChange={changeChecked} /></label>{checked && <div>Color is checked</div>}</div>
        </>
    );
}

export default Input;