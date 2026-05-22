function FormField({ label, type, value, onChange, required = false }) {
    return (
        <div className="form-group">
            <label className="input-label">{label}:</label>
            {type === "textarea" ? (
                <textarea
                    className="input-field"
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            ) : (
                <input
                    type={type}
                    className="input-field"
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            )}
        </div>
    );
}
export default FormField;