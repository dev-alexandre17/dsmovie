import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';

function Form() {

    const params = useParams();

    return (
        <FormCard pixelartId={`${params.pixelId}`} />
    );
}

export default Form;