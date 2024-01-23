import {PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) =>
{

    return (
        <div style={{ height: "100vh" }}>
            <PrettyChatWindow
                projectId = '7443ec04-a024-427e-ac1c-53817195f311'
                username={props.user.username}
                secret={props.user.secret}
            style={{height:"100%"}} />

        </div>
    )
};
export default ChatsPage;
