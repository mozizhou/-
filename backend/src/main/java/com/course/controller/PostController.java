package com.course.controller;

import com.course.mapper.dao.CommentModel;
import com.course.mapper.dao.DiscussPostModel;
import com.course.service.DiscussPostService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostController {

    private final DiscussPostService discussPostService;

    public PostController(DiscussPostService discussPostService) {
        this.discussPostService = discussPostService;
    }

    @PostMapping("/user/post")
    public int addDiscussPost(@RequestBody DiscussPostModel postModel) {
        postModel.setCommentCount(0L);
        return discussPostService.addDiscussPost(postModel);
    }

    @GetMapping("/user/query")
    public List<DiscussPostModel> getAllDiscussPost() {
        return discussPostService.getAllDiscussPost();
    }

    @GetMapping("/user/dashboard/detail/{id}")
    public DiscussPostModel getDiscussPost(@PathVariable("id") Long postId) {
        return discussPostService.getDiscussPost(postId);
    }

    @PostMapping("/user/add-comment")
    public int addDiscussPost(@RequestBody CommentModel commentModel) {
        Long postId= commentModel.getPostId();
        discussPostService.addCommentCount(postId);
        return discussPostService.addComment(commentModel);
    }

    @GetMapping("/user/dashboard/comment/{id}")
    public List<CommentModel> getCommentByPostId(@PathVariable("id") Long postId) {
        return discussPostService.getCommentByPostId(postId);
    }
}
