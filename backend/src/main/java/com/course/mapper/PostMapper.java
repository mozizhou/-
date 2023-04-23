package com.course.mapper;

import com.course.mapper.dao.CommentModel;
import com.course.mapper.dao.DiscussPostModel;
import org.springframework.stereotype.Component;

import java.util.List;

@Component(value = "postMapper")
public interface PostMapper {
    int insertDiscussPost(DiscussPostModel post);

    List<DiscussPostModel> selectAllDiscussPost();

    DiscussPostModel selectDiscussPost(Long postId);

    void updateCommentCount(Long postId);

    int insertComment(CommentModel comment);

    List<CommentModel> selectCommentByPostId(Long postId);
}
