using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class StoryManager : MonoBehaviour {

	[SerializeField] private Chapter[] chapters;

	private int chapterIndex;

	void Start() {
		chapterIndex = 0;

		foreach (Chapter chapter in chapters) {
			chapter.gameObject.SetActive(false);
		}

		NextChapter();
	}

	public void NextChapter() {

		if (chapterIndex >= chapters.Length) { Debug.Log("story is done!"); 
		} else {
			Debug.Log("enabling chapter with index: " + chapterIndex);
			chapters[chapterIndex].gameObject.SetActive(true);
			chapterIndex++;
		}
	}
}
