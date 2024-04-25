import { useDeleteSavedPost, useLikePost, useSavePost } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite"

type PostStatsProps = {
    post: Models.Document;
    userId: string;
}

const PostStats = ({ post, userId }: PostStatsProps) => {
    const { mutata: likePost } = useLikePost();
    const { mutata: savePost } = useSavePost();
    const { mutata: deleteSavedPost } = useDeleteSavedPost();


    return (
        <div className="flex justify-between items-center z-20">
            <div className="flex gap-2 mr-5">
                <img src="/assets/icons/liked.svg" alt="like" width={20} height={20} onClick={() => { }} className="cursor-pointer" />
                <p className="small-medium lg:base-medium">0</p>
            </div>

            <div className="flex gap-2">
                <img src="/assets/icons/save.svg" alt="save" width={20} height={20} onClick={() => { }} className="cursor-pointer" />
            </div>
        </div>
    )
}

export default PostStats