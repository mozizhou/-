package com.course.service;

import com.course.mapper.PostMapper;
import com.course.mapper.dao.CommentModel;
import com.course.mapper.dao.DiscussPostModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiscussPostService {

    private final PostMapper postMapper;

    public DiscussPostService(PostMapper postMapper) {
        this.postMapper = postMapper;
    }

    public int addDiscussPost(DiscussPostModel post){
        if (post == null){
            throw new IllegalArgumentException("参数不能为空");
        }
        return postMapper.insertDiscussPost(post);
    }

    public List<DiscussPostModel> getAllDiscussPost(){
        return postMapper.selectAllDiscussPost();
    }

    public DiscussPostModel getDiscussPost(Long postId){
        return postMapper.selectDiscussPost(postId);
    }

    public void addCommentCount(Long postId) {
      postMapper.updateCommentCount(postId);
    }

    public int addComment(CommentModel comment){
        if (comment == null){
            throw new IllegalArgumentException("参数不能为空");
        }
        return postMapper.insertComment(comment);
    }

    public List<CommentModel> getCommentByPostId(Long postId){
        return postMapper.selectCommentByPostId(postId);
    }

}
