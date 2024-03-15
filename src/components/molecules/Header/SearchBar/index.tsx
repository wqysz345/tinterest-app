import {InputField} from "../../../atoms/Field/InputField";

export const HeaderSearchBar = () => {
    return (
        <div className={'w-full mx-auto'}>
            <InputField placeholder={'Search'} className={'w-full !py-2'} />
        </div>
    )
}