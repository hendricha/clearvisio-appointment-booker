import {useStoreon} from '../../web_modules/storeon/preact.js'
import {html} from '../../helper/index.js'

export default (props) => {
  const { appointment, dispatch } = useStoreon('appointment');

  const onInput = e => {
    const { value } = e.target;
    var {customer} = appointment;
    customer[props.property] = value

    dispatch('appointment/set', {customer});
  }

  return html`
    <input type="text" class="form-control" onInput=${onInput}
      value=${appointment.customer[props.property] || ''}/>
  `;
}
