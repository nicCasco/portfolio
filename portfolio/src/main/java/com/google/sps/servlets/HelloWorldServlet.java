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
    movies.add("My Big Fat Greek Wedding");
    movies.add("Monster's University");

        // Convert the server stats to JSON
    //HelloWorld helloWorld = new HelloWorld(movies);
    String json = convertToJson(movies);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  /**
   * Converts a ServerMain instance into a JSON string using manual String concatentation.
   */
  private String convertToJson(ArrayList<String> movies) {
    String json = "{";
    json += "\"Movie #1\": ";
    json += "\"" + movies.get(0) + "\"";
    json += ", ";
    json += "\"Movie #2\": ";
    json += "\"" + movies.get(1) + "\"";
    json += ", ";
    json += "\"Movie #3\": ";
    json += movies.get(2);
    json += "}";
    return json;
  }

  /**
   * Converts a ServerStats instance into a JSON string using the Gson library. Note: We first added
   * the Gson library dependency to pom.xml.
   */
  private String convertToJsonUsingGson(ArrayList<String> movies) {
    Gson gson = new Gson();
    String json = gson.toJson(movies);
    return json;
  }
}


