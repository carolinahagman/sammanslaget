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

		if (chapterIndex >= chapters.Length) {
			return;
		} else {
			chapters[chapterIndex].gameObject.SetActive(true);
			chapterIndex++;
		}
	}
}
