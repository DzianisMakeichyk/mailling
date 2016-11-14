"use strict";

var gulp = require("gulp"),
    plumber = require("gulp-plumber"),
    handlebars = require('gulp-compile-handlebars'),
    sendmail = require('gulp-mailgun'),
    rename = require('gulp-rename'),
    autoprefixer = require("autoprefixer"),
    browsersync = require("browser-sync").create(),
    fs = require('node-fs'),
    helpers = require('./lib/helpers'),
    index_name = 'index_13';


/* File Watchers */
gulp.task("watch", function () {
    gulp.watch('./index.html');
    gulp.watch('app/*.hbs', ["preview"]);
});

gulp.task('preview', function () {
    var templateData = {
            title: 'JobAlert',
            preHeader: 'JobAlert'
        },
        options = {
            batch : ['./app/options'],
            helpers : helpers
        };

    return gulp.src('app/index.hbs')
        .pipe(handlebars(templateData, options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./'));
});

gulp.task('SendToAcid', function () {
    gulp.src( './dist/' + index_name + '.html')
        .pipe(sendmail({
            key: 'key-7f9a59e3caeaa4b4d7415b9cdda34488',
            sender: 'noreply@absolvent.pl',
            recipient: 'absolvent.runme@previews.emailonacid.com',
            subject: 'Gulp Test Email'
        }));
});

gulp.task('SendToMobile', function () {
    gulp.src( './dist/' + index_name + '.html')
        .pipe(sendmail({
            key: 'key-7f9a59e3caeaa4b4d7415b9cdda34488',
            sender: 'noreply@absolvent.pl',
            recipient: 'xxx@gmail.com',
            subject: 'Mail testowy Absolvent.pl'
        }));
});

gulp.task('Build', ['preview'], function() {
    return gulp.src('./*.html')
        .pipe(rename( index_name + '.html'))
        .pipe(gulp.dest('./dist/'));
});

/* Browersync */
gulp.task("serve", ["watch"], function () {
    browsersync.init({
        "server": {
            "baseDir": "./"
        }
    });

    gulp.watch("./index.html").on("change", browsersync.reload);
});
