export const COMMENT_FRAGMENT = `
    fragment CommentParts on Comment{
        id
        text
        user{
            userName
        }
    }
`

export const ROOM_FRAGMENT = `
    fragment RoomParts on Room {
        id
        participants {
            id
        }
    }
`;