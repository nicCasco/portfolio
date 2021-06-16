package com.google.sps.servlets;

import java.util.ArrayList;
import java.io.IOException;
import com.google.gson.Gson;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public final class HelloWorldServlet extends HttpServlet {

  @Override
  public void doGet(final HttpServletRequest request, final HttpServletResponse response) throws IOException {
    ArrayList<String> movies = new ArrayList<String>();
    movies.add("You've Got Mail");
    movies.add("Miss Congeniality");
    movies.add("My Big Fat Greek Wedding");

   // Convert the movie list to JSON
   String json = convertToJson(movies);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  /**
   * Converts a list of movies instance into a JSON string using manual String concatentation.
   */
  private String convertToJson(ArrayList<String> movies) {
    String json = "{";
    json += "\"Movie #1:" + movies.get(0) + "\"";
    json += ", ";
    json += "\"Movie #2:" + movies.get(1) + "\"";
    json += ", ";
    json += "\"Movie #3:" + movies.get(2);
    json += "}";
    return json;
  }

}


