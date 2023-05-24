import styles from './addPetForm.module.scss';
import { ReactComponent as PlusIcon } from 'images/icons/photo-plus.svg';

const PetThreeStepFormContent = ({ data, setData, fileInputRef }) => {
    const handleChange = e => {
        const input = e.target.name;
        const value = e.target.value;

        setData(prev => ({ ...prev, [input]: value }));
    };

    const getphotoURL = () => URL.createObjectURL(fileInputRef.current.files[0]);

    return (
        <div className={styles.petThirdStepInputs}>
            <label className={styles.petPhotoLabel}>
                Add photo
                <PlusIcon className={styles.petPhotoPlusIcon} />
                <input
                    type="file"
                    required
                    value={data.photo ?? ''}
                    ref={fileInputRef}
                    name="photo"
                    alt="pet`s photo"
                    onChange={handleChange}
                    className={styles.photoInput}
                    accept="image/jpeg, image/png, image/webp, image/gif"
                />
                {fileInputRef.current?.files[0] && (
                    <img className={styles.petPhotoPreview} src={getphotoURL()} alt="pet preview"></img>
                )}
            </label>

            <label className={styles.petLabel}>
                Comments
                <textarea
                    type="text"
                    required
                    value={data.comments ?? ''}
                    name="comments"
                    onChange={handleChange}
                    className={styles.textArea}
                    placeholder="Field is required"
                />
            </label>
        </div>
    );
};
export default PetThreeStepFormContent;
