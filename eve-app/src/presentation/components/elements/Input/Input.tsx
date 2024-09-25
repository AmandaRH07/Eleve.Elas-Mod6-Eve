export function Input({
    size,
    type,
    placeholder,
    maxLength,
    onChange,
    defaultValue,
    disabled,
    tabIndex
}: {
    size: number,
    type: string,
    tabIndex: number;
    maxLength: number,
    disabled: boolean,
    placeholder: string,
    onChange: () => void,
    defaultValue: string | number | readonly string[] | undefined,
})
 {
    return (
        <input size={size }
            type={type}
            placeholder={placeholder}
            maxLength={maxLength}
            disabled={disabled}
            onChange={onChange}
            defaultValue={defaultValue}
            tabIndex={tabIndex}
        >

        </input>
    )
}