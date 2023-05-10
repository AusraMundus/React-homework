import randColor from '../../Function/randColor';

export default function Style() {

    return (
        <>
            <style>
                {`
                    .sq-bin .sq {
                        border-color: ${randColor()};
                    }
                `}
            </style>
        </>
    )
}