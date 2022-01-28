$(document).ready(function() {
    $('.btn-generate').click(function(){
        $("#quest-tasks").html("");
        // $("html, body").animate({ scrollTop: $(document).height() }, 1000);
        var irl_task = $("#tasks-select").val();
        var quest = quests[irl_task].random();
        
        document.getElementById('quest-title').innerHTML = quest.title;
        document.getElementById('quest-description').innerHTML = quest.description;
        generate_tasks_html(quest.tasks);
        // var loadingMessage = loading_list.random();
    });
});

function generate_tasks_html(tasks){
    var htmlAttr = "";
    var task = "";
    var loops = 0;
    var taskIds = [];
    while(loops < 2) {
        task = tasks.random();

        if (!$.inArray(task.id, taskIds)) {
            continue;
        }

        taskIds.push(task.id);

        htmlAttr += '<div class="form-check"><input type="checkbox" id="' + loops + 'quest" class="form-check-input" name="'  + loops + 'quest" >';
        htmlAttr += '<label for="' + loops + 'quest" class="form-check-label">'+task.value+'</label></div>';

        loops++;
    }

    $("#quest-tasks").append(htmlAttr);
}

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}